# Rent Car

This project is for the car rental platform "Rent Car". You can find and rent cars of various brands at affordable prices.

## This project was bootstrapped with [Create React App] 

1. Clone the repository to your computer:
git clone https://github.com/IhorZolot/rentCar
2. Install dependencies:
npm install

## Getting Started
To run the project, use the following command:
npm start

## Usage

1. Start the program:
npm start
2. Open your web browser and go to http://localhost:3000.
3. Select your desired car make, price, and mileage range, and then click the "Search" button.
4. View the list of available cars and their specifications.

## Examples

### API Request

fetchCarsThunk = createAsyncThunk('fetchCars', async (_, thunkAPI) => {
	try {
		const { data } = await Api.get('adverts')
		return data
	} catch (error) {
		throw error.message
	}
})

  ## Contribution

We welcome everyone who wants to contribute to the development of the "Rent Car" project. Please feel free to reach out to GOIT for additional guidance.