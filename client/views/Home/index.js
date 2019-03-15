import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getGreeting } from '../../store/Greeting/actions'

import './Home.scss'

class Home extends Component {
    componentWillMount = () => this.props.getGreeting()

    render() {
        const { greeting, error } = this.props
        return (
            <div id='home-view'>
                {!error && greeting && <h1 id='title'>{greeting}</h1>}
                {error && <pre>{JSON.stringify(error)}</pre>}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    greeting: state.Greeting.greeting,
    error: state.Greeting.error
})

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({
        getGreeting
    }, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)
