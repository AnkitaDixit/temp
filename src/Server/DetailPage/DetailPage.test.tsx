import React from 'react';
import { render, screen } from '@testing-library/react';
import DetailPage from './DetailPage';
import { getDetails } from '../../utils/api';

jest.mock('../../utils/api');

test('renders app page', () => {
  const linkElement = "123";
  expect(linkElement).toBeInvalid;
});