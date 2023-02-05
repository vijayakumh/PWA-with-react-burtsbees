/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {
    Box,
    Text,
    Divider,
    SimpleGrid,
    useMultiStyleConfig,
    StylesProvider,
    Select,
    useStyles,
    Heading,
    Input,
    InputGroup,
    InputRightElement,
    Button,
    FormControl,
    Link,
    Stack
} from '@chakra-ui/react'
import {useIntl} from 'react-intl'

import LinksList from '../links-list'
import SocialIcons from '../social-icons'
import {HideOnDesktop, HideOnMobile} from '../responsive'
import {getPathWithLocale} from '../../utils/url'
import LocaleText from '../locale-text'
import useSite from '../../hooks/use-site'
import {
    BurtsNewFooterLogo,
    Burtsfootersubscriptionarrow,
    BurtsFooterUSCountry,
    BurtsFooterOneTrustSiteBadge
} from '../icons'

const Footer = ({...otherProps}) => {
    const styles = useMultiStyleConfig('Footer')
    // const styles1 = useMultiStyleConfig('Promotional-Banner')
    const intl = useIntl()
    const [locale, setLocale] = useState(intl.locale)
    const site = useSite()
    const {l10n} = site
    const supportedLocaleIds = l10n?.supportedLocales.map((locale) => locale.id)
    const showLocaleSelector = supportedLocaleIds?.length > 1
    return (
        <Box as="footer" {...styles.container} {...otherProps}>
            <Box {...styles.content}>
                <StylesProvider value={styles}>
                    <HideOnMobile>
                        <Stack direction={'columns'}>
                            <Box {...styles.footerlogoContainer}>
                                <Link>
                                    <BurtsNewFooterLogo {...styles.burtsFooterLogo} />
                                </Link>
                            </Box>
                            <Stack {...styles.linkedListStyle}>
                                <LinksList
                                    heading={intl.formatMessage({
                                        id: 'burtsfooter.column.customer_support',
                                        defaultMessage: 'About'
                                    })}
                                    links={[
                                        {
                                            href: '/',
                                            text: intl.formatMessage({
                                                id: 'burtsfooter.column.who_we_are',
                                                defaultMessage: 'Who We Are'
                                            })
                                        },
                                        {
                                            href: '/',
                                            text: intl.formatMessage({
                                                id: 'sburtsfooter.column.our_values',
                                                defaultMessage: 'Our Values'
                                            })
                                        },
                                        {
                                            href: '/',
                                            text: intl.formatMessage({
                                                id: 'burtsfooter.column.sustainability',
                                                defaultMessage: 'Sastainability'
                                            })
                                        },
                                        {
                                            href: '/',
                                            text: intl.formatMessage({
                                                id: 'burtsfooter.column.request_terraCycle_label',
                                                defaultMessage: 'Request TerraCycle® Label'
                                            })
                                        },
                                        {
                                            href: '/',
                                            text: intl.formatMessage({
                                                id: 'burtsfooter.column.shipping_information',
                                                defaultMessage: 'Shipping Information'
                                            })
                                        },
                                        {
                                            href: '/',
                                            text: intl.formatMessage({
                                                id: 'burtsfooter.column.hive_to_home_subscription',
                                                defaultMessage: 'Hive to Home Subscription'
                                            })
                                        }
                                    ]}
                                    {...styles.textColor}
                                />
                                <LinksList
                                    heading={intl.formatMessage({
                                        id: 'burtsfooter.column.contact',
                                        defaultMessage: 'Contact'
                                    })}
                                    links={[
                                        {
                                            href: '/',
                                            text: intl.formatMessage({
                                                id: 'burtsfooter.column.contact_us',
                                                defaultMessage: 'Contact Us'
                                            })
                                        },
                                        {
                                            href: '/',
                                            text: intl.formatMessage({
                                                id: 'burtsfooter.column.faqs',
                                                defaultMessage: 'FAQs'
                                            })
                                        },
                                        {
                                            href: '/',
                                            text: intl.formatMessage({
                                                id: 'burtsfooter.column.returns_exchanges',
                                                defaultMessage: 'Returns & Exchanges'
                                            })
                                        },
                                        {
                                            href: '/',
                                            text: intl.formatMessage({
                                                id: 'burtsfooter.column.press',
                                                defaultMessage: 'Press'
                                            })
                                        },
                                        {
                                            href: '/',
                                            text: intl.formatMessage({
                                                id: 'burtsfooter.column.career',
                                                defaultMessage: 'Career'
                                            })
                                        }
                                    ]}
                                    {...styles.textColor}
                                />
                                <LinksList
                                    heading={intl.formatMessage({
                                        id: 'burtsfooter.column.more',
                                        defaultMessage: 'More'
                                    })}
                                    links={[
                                        {
                                            href: '/',
                                            text: intl.formatMessage({
                                                id: 'burtsfooter.column.login',
                                                defaultMessage: 'Login'
                                            })
                                        },
                                        {
                                            href: '/',
                                            text: intl.formatMessage({
                                                id: 'burtsfooter.column.dermatologists',
                                                defaultMessage: 'Dermatologists'
                                            })
                                        },
                                        {
                                            href: '/',
                                            text: intl.formatMessage({
                                                id: 'burtsfooter.column.affiliate',
                                                defaultMessage: 'Affiliate'
                                            })
                                        },
                                        {
                                            href: '/',
                                            text: intl.formatMessage({
                                                id: 'burtsfooter.column.wholesale',
                                                defaultMessage: 'Wholesale'
                                            })
                                        },
                                        {
                                            href: '/',
                                            text: intl.formatMessage({
                                                id: 'burtsfooter.column.sitemap',
                                                defaultMessage: 'Sitemap'
                                            })
                                        },
                                        {
                                            href: '/',
                                            text: intl.formatMessage({
                                                id: 'burtsfooter.column.privacy_policy',
                                                defaultMessage: 'Privacy Policy'
                                            })
                                        },
                                        {
                                            href: '/',
                                            text: intl.formatMessage({
                                                id: 'burtsfooter.column.terms_conditions',
                                                defaultMessage: 'Terms & Conditions'
                                            })
                                        }
                                    ]}
                                    {...styles.textColor}
                                />
                            </Stack>
                            <Box {...styles.subscribeContainer}>
                                <Subscribe />
                            </Box>
                        </Stack>
                    </HideOnMobile>

                    <HideOnDesktop>
                        <Subscribe />
                    </HideOnDesktop>

                    {showLocaleSelector && (
                        <Box {...styles.localeSelector}>
                            <FormControl
                                data-testid="sf-footer-locale-selector"
                                id="locale_selector"
                                width="auto"
                                {...otherProps}
                            >
                                <Select
                                    value={locale}
                                    onChange={({target}) => {
                                        setLocale(target.value)

                                        // Update the `locale` in the URL.
                                        const newUrl = getPathWithLocale(target.value, {
                                            disallowParams: ['refine']
                                        })

                                        window.location = newUrl
                                    }}
                                    variant="filled"
                                    {...styles.localeDropdown}
                                >
                                    {supportedLocaleIds.map((locale) => (
                                        <LocaleText
                                            as="option"
                                            value={locale}
                                            shortCode={locale}
                                            key={locale}
                                            {...styles.localeDropdownOption}
                                        />
                                    ))}
                                </Select>
                            </FormControl>
                        </Box>
                    )}

                    <Divider {...styles.horizontalRule} />

                    <Box {...styles.bottomHalf}>
                        <SimpleGrid columns={[null, null, 2]}>
                            <Box>
                                <Text {...styles.copyright}>
                                    {/* &copy;{' '}
                                    {intl.formatMessage({
                                        id: 'footer.message.copyright',
                                        defaultMessage:
                                            '2021 Salesforce or its affiliates. All rights reserved. This is a demo store only. Orders made WILL NOT be processed.'
                                    })} */}
                                    {intl.formatMessage({
                                        id: 'burtsfooter.websiteaccessibility.heading',
                                        defaultMessage: 'Website Accessibility'
                                    })}
                                </Text>
                                <Text {...styles.copyright}>
                                    {intl.formatMessage({
                                        id: 'burtsfooter.websiteaccessibility.content_top',
                                        defaultMessage: ''
                                    })}
                                </Text>
                                <Text {...styles.copyright}>
                                    {intl.formatMessage({
                                        id: 'burtsfooter.websiteaccessibility.content_bottom',
                                        defaultMessage: ''
                                    })}
                                </Text>
                            </Box>
                            <Box>
                                <Box>
                                    <Text>
                                        {intl.formatMessage({
                                            id: 'burtsfooter.content_bottom.connect_with_us',
                                            defaultMessage: ''
                                        })}
                                    </Text>
                                    <Text>
                                        {intl.formatMessage({
                                            id: 'burtsfooter.content_bottom.#burtsbees',
                                            defaultMessage: ''
                                        })}
                                    </Text>
                                    <SocialIcons
                                        variant="flex-start"
                                        pinterestInnerColor="black"
                                        {...styles.socialIcons}
                                    />
                                    <Box>
                                        <Link>
                                            {intl.formatMessage({
                                                id: 'burtsfooter.content_bottom.burtsbees_baby',
                                                defaultMessage: ''
                                            })}
                                        </Link>
                                        <Link>
                                            {intl.formatMessage({
                                                id: 'burtsfooter.content_bottom.burtsbees_pets',
                                                defaultMessage: ''
                                            })}
                                        </Link>
                                    </Box>
                                </Box>
                            </Box>

                            {/* <HideOnDesktop>
                                <LegalLinks variant="vertical" />
                            </HideOnDesktop>
                            <HideOnMobile>
                                <LegalLinks variant="horizontal" />
                            </HideOnMobile> */}
                        </SimpleGrid>
                        <Stack direction={'row'} justifyContent={'space-between'}>
                            <Box>
                                <Button {...styles.burtsfooterButton}>
                                    <BurtsFooterUSCountry />
                                    {intl.formatMessage({
                                        id: 'burtsfooter.content_bottom.change_region_button',
                                        defaultMessage: ''
                                    })}
                                </Button>
                                <Button {...styles.burtsfooterButton}>
                                    {intl.formatMessage({
                                        id: 'burtsfooter.content_bottom.cookie_settings',
                                        defaultMessage: ''
                                    })}
                                </Button>
                            </Box>
                            <Box>
                                <Button {...styles.burtsfooterButton}>
                                    <BurtsFooterOneTrustSiteBadge />
                                </Button>
                            </Box>
                        </Stack>
                    </Box>
                </StylesProvider>
            </Box>
        </Box>
    )
}

export default Footer

const Subscribe = ({...otherProps}) => {
    const styles = useStyles()
    const intl = useIntl()

    return (
        <Box {...styles.subscribe} {...otherProps}>
            <Heading {...styles.subscribeHeading}>
                {intl.formatMessage({
                    id: 'burtsfooter.subscribe.heading.first_to_know',
                    defaultMessage: 'Join The Hive'
                })}
            </Heading>
            <Text {...styles.subscribeMessage}>
                {intl.formatMessage({
                    id: 'burtsfooter.subscribe.content.message',
                    defaultMessage:
                        'Become a Hive Member to be the first to learn aboutspecial offers, helpful tips and the latest buzz.'
                })}
            </Text>

            <Box>
                <InputGroup>
                    <Input type="email" placeholder="Your Email" {...styles.subscribeField} />
                    <InputRightElement {...styles.subscribeButtonContainer}>
                        <Button variant="footer" {...styles.subscribeButtonContainerButton}>
                            {/* {intl.formatMessage({
                                id: 'footer.subscribe.button.sign_up',
                                defaultMessage: 'Sign Up'
                            })} */}
                            <Burtsfootersubscriptionarrow width={'100%'} height={'100%'} />
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </Box>

            {/* <SocialIcons variant="flex-start" pinterestInnerColor="black" {...styles.socialIcons} /> */}
        </Box>
    )
}

const LegalLinks = ({variant}) => {
    const intl = useIntl()
    return (
        <LinksList
            links={[
                {
                    href: '/',
                    text: intl.formatMessage({
                        id: 'footer.link.terms_conditions',
                        defaultMessage: 'Terms & Conditions'
                    })
                },
                {
                    href: '/',
                    text: intl.formatMessage({
                        id: 'footer.link.privacy_policy',
                        defaultMessage: 'Privacy Policy'
                    })
                },
                {
                    href: '/',
                    text: intl.formatMessage({
                        id: 'footer.link.site_map',
                        defaultMessage: 'Site Map'
                    })
                }
            ]}
            color="gray.200"
            variant={variant}
        />
    )
}
LegalLinks.propTypes = {
    variant: PropTypes.oneOf(['vertical', 'horizontal'])
}
