import React from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import Header from '../../components/Header'
import Profile from '../../components/Profile'

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({

})

@connect(mapStateToProps, mapDispatchToProps)
export default class ProfileContainer extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Profile Page</title>
          <meta name="description" content="Modern Web App - Home Page" />
        </Helmet>
        <Header />
        <Profile />
      </div>
    )
  }
}
