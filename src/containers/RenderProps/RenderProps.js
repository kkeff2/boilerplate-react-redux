import { connect } from 'react-redux'
import RenderProps from '../../components/RenderProps/RenderProps'

import { testServiceResponse } from '../../actions/common'

const mapStateToProps = state => ({
  response: state.common.response
})

const mapDispatchToProps = dispatch => ({
  callService: () =>
    dispatch(testServiceResponse())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RenderProps)
