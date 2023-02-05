/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import React from 'react'
import PropTypes from 'prop-types'
import {useIntl} from 'react-intl'
import {useMultiStyleConfig, Box, Text, Link, Button, IconButton} from '@chakra-ui/react'
import {CloseIcon} from '../icons'

const PromoBanner = ({title, img, actions, ...props}) => {
    const intl = useIntl()
    const styles = useMultiStyleConfig('promotionalBanner')
    return (
        <Box {...styles.container}>
            <Box {...styles.content}>
                <Link {...styles.text}>
                    {intl.formatMessage({
                        id: 'burtsheader.promotional_banner_text',
                        defaultMessage:
                            'Get Free Shipping on $35+ Orders. Order by 12/19 for 2 day shipping & get your gifts in time!'
                    })}
                </Link>
                <IconButton
                    {...styles.closeButton}
                    text={intl.formatMessage({
                        id: 'burtsheader.button.closeText',
                        defaultMessage: 'Close'
                    })}
                    variant="unstyled"
                    icon={<CloseIcon />}
                >
                    {/* {intl.formatMessage({
                    id: 'burtsheader.button.closeText',
                    defaultMessage: 'Close'
                })} */}
                </IconButton>
            </Box>
        </Box>
    )
}

PromoBanner.displayName = 'Promotional Banner'

PromoBanner.propTypes = {
    /**
     * Promotional Banner component main title
     */
    title: PropTypes.string,
    /**
     * Call to action component(s)
     */
    actions: PropTypes.element
}

export default PromoBanner
