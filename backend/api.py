
import enum
import logging

from livekit.agents import Agent, RunContext, function_tool
from db_driver import DatabaseDriver

logger = logging.getLogger("user-data")
logger.setLevel(logging.INFO)

DB = DatabaseDriver()


class CarDetails(enum.Enum):
    VIN = "vin"
    Make = "make"
    Model = "model"
    Year = "year"


class AssistantFnc(Agent):
    def __init__(self, instructions: str):
        super().__init__(instructions=instructions)

        self._car_details = {
            CarDetails.VIN: "",
            CarDetails.Make: "",
            CarDetails.Model: "",
            CarDetails.Year: "",
        }

    def get_car_str(self):
        return "".join(
            f"{key.value}: {value}\n"
            for key, value in self._car_details.items()
        )

    def has_car(self):
        return self._car_details[CarDetails.VIN] != ""

    @function_tool
    async def lookup_car(self, context: RunContext, vin: str) -> str:
        """Look up a car in the database using its VIN."""
        logger.info("lookup car - vin: %s", vin)

        result = DB.get_car_by_vin(vin)
        if result is None:
            return "Car not found."

        self._car_details = {
            CarDetails.VIN: result.vin,
            CarDetails.Make: result.make,
            CarDetails.Model: result.model,
            CarDetails.Year: result.year,
        }

        return f"The car details are:\n{self.get_car_str()}"

    @function_tool
    async def get_car_details(self, context: RunContext) -> str:
        """Get the details of the currently selected car."""
        logger.info("get car details")
        return f"The car details are:\n{self.get_car_str()}"

    @function_tool
    async def create_car(
        self,
        context: RunContext,
        vin: str,
        make: str,
        model: str,
        year: int,
    ) -> str:
        """Create a new car in the database using its VIN, make, model, and year."""
        logger.info(
            "create car - vin: %s, make: %s, model: %s, year: %s",
            vin, make, model, year
        )

        result = DB.create_car(vin, make, model, year)
        if result is None:
            return "Failed to create car."

        self._car_details = {
            CarDetails.VIN: result.vin,
            CarDetails.Make: result.make,
            CarDetails.Model: result.model,
            CarDetails.Year: result.year,
        }

        return "Car created successfully."
