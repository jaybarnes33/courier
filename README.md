# Courier Application

## Description

This project is a React Native application designed for sending and receiving packages. The application includes various UI components to display information about the drop location and the rider. It uses TypeScript and Tailwind CSS for styling.

## Features

- Allow user to provide package information (Pickup & Dropoff)
- Real Time tracking. (Simulated for now)
- Real Time package assignment to nearest rider via web sockets.
- Display rider information including name, vehicle number, and location coordinates
- Call button to contact the rider

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/jaybarnes33/courier.git
    ```
2. Navigate to the project directory:
    ```sh
    cd courier
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

## Usage

1. Start the development server:
    ```sh
    npm start
    ```
2. Run the application on an emulator or physical device:
    ```sh
    npm run android   # For Android
    npm run ios       # For iOS
    ```

## File Structure

- `package.tsx`: Contains the main UI components for displaying rider and drop location information.

## Dependencies

- React Native
- TypeScript
- Tailwind CSS

## Contributing

1. Fork the repository.
2. Create a new branch:
    ```sh
    git checkout -b feature-branch
    ```
3. Make your changes and commit them:
    ```sh
    git commit -m "Description of your changes"
    ```
4. Push to the branch:
    ```sh
    git push origin feature-branch
    ```
5. Create a pull request.
