/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
export default {
    parts: ['container', 'list', 'listItem', 'listItemSx', 'heading'],
    baseStyle: {
        container: {
        },
        list: {
            fontSize: 'sm'
        },
        headingLink: {
            display: 'inline-flex'
        },
        heading: {
            // fontSize: 'md',
            paddingTop: 3,
            paddingBottom: "16px",
            fontWeight: "500",
            fontSize: "18px",
        },
        burtsListItem: {
            fontWeight: "400",
            lineHeight: "130%",
            paddingBottom: "8px"
        }
    },
    variants: {
        vertical: {},
        horizontal: {
            listItem: {
                borderLeft: '1px solid',
                paddingLeft: 2,
                fontSize: '14px'
            },
            listItemSx: {
                '&:first-of-type': {
                    borderLeft: 0,
                    paddingLeft: 0
                }
            }
        }
    },
    defaultProps: {
        variant: 'vertical'
    }
}
