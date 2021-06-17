import { useTranslation } from 'react-i18next'

export const NotFound = (): JSX.Element => {
  const { t } = useTranslation()
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h1 className="text-3xl bg-red-500">{t('pageNotFound')}</h1>
      </div>
    </div>
  )
}
