import React from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../actions'
import Header from '../../components/Header'
import Home from '../../components/Home'

const mapStateToProps = state => ({
  count: state.count
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

@connect(mapStateToProps, mapDispatchToProps)
export default class HomeContainer extends React.Component {
  increase = () => {
    this.props.actions.increase()
  }
  decrease = () => {
    this.props.actions.decrease()
  }
  increaseAsync = () => {
    this.props.actions.increaseAsync()
  }
  decreaseAsync = () => {
    this.props.actions.decreaseAsync()
  }
  render() {
    const { count } = this.props
    return (
      <div>
        <Helmet>
          <title>SSR Counter</title>
          <meta name="description" content="Web App - Home Page" />
        </Helmet>
        <Header />
        <Home
          count={count}
          increase={this.increase}
          decrease={this.decrease}
          increaseAsync={this.increaseAsync}
          decreaseAsync={this.decreaseAsync}
        />
      </div>
    )
  }
}