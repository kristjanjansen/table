// https://github.com/threepointone/glamor/issues/168

import React, { Component } from 'react'
import BodyStyle from 'body-style'
import WebfontLoader from '@dr-kobros/react-webfont-loader';

import Row from './components/Row'
import Id from './components/Id'
import Chart from './components/Chart'
import Number from './components/Number'
import Spinner from './components/Spinner'

const data = [
    {id: 'a', name: 'Devin', values: [1.21,2.1,3.3], status: 'running', id: 'a3a31a'},
    {id: 'b', name: 'Gabe', values: [3.33,1.21,2.45], status: 'done', id: '42da21'},
    {id: 'c', name: 'Kim', values: [3.1,1.41,4.1], status: 'done', id: '8faddd'},
]

const fonts = {
  google: {
    families: ['Roboto Mono:300,600'],
  }
}

const styles = {
    body: {
        background: '#222',
        color: 'white',
        fontFamily: 'Roboto Mono',
        lineHeight: '1.75em',
        margin: 0,
        padding: 0,
    },
    container: {
        padding: '2rem'
    }
}

class App extends Component {

    render() {
        return (
            <WebfontLoader config={fonts}>
                <BodyStyle style={styles.body}>
                    <div style={styles.container}>
                        {data.map(row => {
                            return <Row key={row.id} row={row}>
                                <Spinner status={row.status} />
                                <Id value={row.id} />
                                <Number number={row.values[0]} color="yellow" />
                                <Chart values={row.values.slice(0,2)} color="yellow" />
                                <Number number={row.values.reverse()[0]} color="orange" />
                                <Chart values={row.values.slice(1,3)} color="orange" />
                            </Row>
                        })}
                    </div>
                </BodyStyle>
            </WebfontLoader>
        )
    }

}

export default App