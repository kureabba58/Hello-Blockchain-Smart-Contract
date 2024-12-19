import { describe, it, beforeEach, expect } from 'vitest';

// Mocking the Hello Blockchain contract for testing purposes
const mockHelloBlockchain = {
  state: {
    helloMessage: "" as string,
  },
  setHello: (message: string) => {
    mockHelloBlockchain.state.helloMessage = message;
    return { value: "Message set successfully" };
  },
  getHello: () => {
    return mockHelloBlockchain.state.helloMessage;
  },
};

describe('Hello Blockchain Contract', () => {
  let user1: string, user2: string;

  beforeEach(() => {
    // Initialize mock state and user principals
    user1 = 'ST1234...';
    user2 = 'ST5678...';

    mockHelloBlockchain.state = {
      helloMessage: "",
    };
  });

  it('should allow setting a hello message', () => {
    const result = mockHelloBlockchain.setHello('Hello, Blockchain!');
    expect(result).toEqual({ value: "Message set successfully" });
    expect(mockHelloBlockchain.state.helloMessage).toBe('Hello, Blockchain!');
  });

  it('should retrieve the correct hello message', () => {
    mockHelloBlockchain.setHello('Hello, Blockchain!');
    const message = mockHelloBlockchain.getHello();
    expect(message).toBe('Hello, Blockchain!');
  });

  it('should retrieve an empty message before setting one', () => {
    const message = mockHelloBlockchain.getHello();
    expect(message).toBe('');
  });
});
