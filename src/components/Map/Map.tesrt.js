import React from 'react';
import Map from './Map';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import mapboxgl from 'mapbox-gl';

jest.mock('mapbox-gl')

const removeHandle = jest.fn()
const mapImplement = jest.fn(() => ({
  remove: removeHandle
}))
mapboxgl.Map.mockImplementation(mapImplement)

describe('Map', () => {
  it('should render correctly', () => {
    const { container } = render(<Map />);

    expect(container.getElementsByClassName('Map').length).toBeTruthy()
    expect(container.getElementsByClassName('Map-app').length).toBeTruthy()
  });
});