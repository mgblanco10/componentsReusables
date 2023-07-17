import { beforeEach, expect } from "vitest"
import {render, screen,fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom';
import Header2 from "./Header2"

describe('Component NavBar', () => {
    beforeEach(()=>{
        render(
            <MemoryRouter>
              <Header2 />
            </MemoryRouter>
          );
        })

    test('should print text', () => {
      expect(screen.getByText('HOME')).toBeDefined();
    });
  
    test('should print text', () => {
      expect(screen.getByText('ARTICLES')).toBeDefined();
    });

    test('should print text', () => {
        expect(screen.getByText('PORTFOLIO')).toBeDefined();
      });
    
    test('should print text', () => {
        expect(screen.getByText('ABOUT')).toBeDefined();
    });

    test('should print text', () => {
        expect(screen.getByText('CONTACT')).toBeDefined();
    });
});