import { Box, ButtonMenu, ButtonMenuItem, Flex } from '@pancakeswap/uikit'
import { NextLinkFromReactRouter } from 'components/NextLink'
import { useTranslation } from 'contexts/Localization'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import Search from 'views/Info/components/InfoSearch'
import useTheme from '../../../../hooks/useTheme';

const NavWrapper = styled(Flex)`
  background: ${({ theme }) => theme.colors.gradients.cardHeader};
  justify-content: space-between;
  padding: 20px 16px;
  flex-direction: column;
  gap: 8px;
  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 20px 40px;
    flex-direction: row;
  }
`

const InfoNav = () => {
  const { t } = useTranslation()
  const router = useRouter()
  const isPools = router.asPath === '/info/pools'
  const isTokens = router.asPath === '/info/tokens'
  const {theme} = useTheme();

  let activeIndex = 0
  if (isPools) {
    activeIndex = 1
  }
  if (isTokens) {
    activeIndex = 2
  }
  return (
    <NavWrapper>
      <Box>
        <ButtonMenu activeIndex={activeIndex} scale="sm" variant="subtle">
          <ButtonMenuItem as={NextLinkFromReactRouter} to="/info" style={{color:theme.isDark?"#fff":"#1f2335"}}>
            {t('Overview')}
          </ButtonMenuItem>
          <ButtonMenuItem as={NextLinkFromReactRouter} to="/info/pools" style={{color:theme.isDark?"#fff":"#1f2335"}}>
            {t('Pools')}
          </ButtonMenuItem>
          <ButtonMenuItem as={NextLinkFromReactRouter} to="/info/tokens" style={{color:theme.isDark?"#fff":"#1f2335"}}>
            {t('Tokens')}
          </ButtonMenuItem>
        </ButtonMenu>
      </Box>
      <Box width={['100%', '100%', '250px']}>
        <Search />
      </Box>
    </NavWrapper>
  )
}

export default InfoNav
