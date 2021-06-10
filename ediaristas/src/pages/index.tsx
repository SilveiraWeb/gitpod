import Head from 'next/head'
import Image from 'next/image'
import styles from '@styles/globals.css'
import SafeEnvironment from '../ui/components/feedback/SafeEnvironment/SafeEnvironment'
import {PageTitle, PageSubtitle} from '../ui/components/data-display/PageTitle/PageTitle'

export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle 
        title={'Conheça os profissionais'}
       ></PageTitle>
      <PageSubtitle  subtitle={<h2>Preencha seu endereço e veja todos os profissionais da sua localidade</h2>}>
          <p>É posivel passar informações no corpo do Componente utilizando fechamento do elemento e definindo "props.children"</p>

      </PageSubtitle>
      
    </div>
  )
}
