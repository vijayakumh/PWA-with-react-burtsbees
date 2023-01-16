/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import React from 'react'
import {fireEvent} from '@testing-library/react'
import {renderWithProviders} from '../../utils/test-utils'
import PromoBanner from './index'

test('Promotional Banner renders without errors', () => {
    const data = {
        title: 'title',
        actions: undefined
    }
    const {getByText} = renderWithProviders(<PromoBanner {...data} />)
    expect(getByText(/title/i)).toBeInTheDocument()
})

test('Promotional Banner renders actions and event handlers', () => {
    const onClick = jest.fn()
    const data = {
        title: 'title',
        actions: <button data-testid="button" onClick={onClick}></button>,
        img: {
            src: 'src',
            alt: 'alt'
        }
    }
    const {getByTestId} = renderWithProviders(<PromoBanner {...data} />)
    const button = getByTestId('button')
    expect(button).toBeInTheDocument()
    fireEvent.click(button)
    expect(onClick).toHaveBeenCalledTimes(1)
})
