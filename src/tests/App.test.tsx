import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import App from '../application/App';

//Key concepts
// Describe/It
// expect
// render, fireEvent, screen
// jest.fn() / jest.spyOn, jest.mock()

const mockSaveDogsSomewhere = jest.fn()
jest.mock('../services/database-service.ts', () => ({
    saveDogsSomewhere: () => {
        mockSaveDogsSomewhere()
    }
}))

describe('App', () => {
    beforeEach(() => {
        jest.clearAllMocks()
    })

    it('should work',() => {
      render(<App />);
      const linkElement = screen.getByText(/Dogs database/i);
      expect(linkElement).toBeInTheDocument();
    })

    it('Should add card after filling form',() => {
      render(<App />);
      const addDogInput = screen.getByTestId('add-dog-name');
      fireEvent.change(addDogInput, { target: { value: 'New Dog'}});
      const addDogButton= screen.getByTestId('add-dog-button');
      const previousDogsAmount = screen.queryAllByTestId('dog-card').length
      fireEvent.click(addDogButton);
      const currentDogsAmount = screen.queryAllByTestId('dog-card').length;
      expect(currentDogsAmount).toBeGreaterThan(previousDogsAmount)
    })

    it('should call endpoint',() => {
        render(<App />);
        const saveButton = screen.getByTestId('save-button');
        fireEvent.click(saveButton)
        expect(true).toBeTruthy()
        expect(mockSaveDogsSomewhere).toBeCalled()
    })
});
