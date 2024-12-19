# Hello Blockchain Smart Contract

This project implements a simple **Hello Blockchain** smart contract, designed as a learning tool for understanding blockchain basics. The contract allows users to set and retrieve a custom "hello message" stored on the blockchain.

## Features

### Public Functions
1. **Set Hello Message (`set-hello`)**
   - Allows a user to update the `hello-message` variable.
   - The message can be up to 11 ASCII characters long.
   - Returns a success confirmation upon successful execution.

2. **Get Hello Message (`get-hello`)**
   - Retrieves the current value of the `hello-message` variable.

## State Management
- **Hello Message (`hello-message` variable)**:
  - A globally accessible string variable with a maximum length of 11 ASCII characters.
  - Default value: `"Hello World"`.

## Unit Testing

Comprehensive unit tests validate the functionality of the contract:
- Ensure the message can be set and retrieved correctly.
- Confirm that the default message is returned if no custom message is set.

### Test Scenarios
1. Setting a custom hello message.
2. Retrieving the currently set hello message.
3. Ensuring an empty message is returned if no message is set (before initialization).

## Deployment

This contract can be deployed to any blockchain supporting Clarity smart contracts. It's an excellent introductory project for developers learning blockchain development.

---

## Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
