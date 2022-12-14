import { Button } from '@pancakeswap/uikit'

import { useTranslation } from 'contexts/Localization'

const StakeVaultButton = (props) => {
  const { t } = useTranslation()

  return (
    <Button {...props} disabled>
      {t('Stake DEFC in IFO pool')}
    </Button>
  )
}

export default StakeVaultButton
