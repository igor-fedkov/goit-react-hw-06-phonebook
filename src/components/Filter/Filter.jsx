import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../../redux/phoneBook/phoneBook-actions';

import { Label, Input, Container } from './Filter.css';

const Filter = ({ filter, changeFilter }) => {
	return (
		<Container>
			<Label>
				Find contacts by name
				<Input type="text" name="filter" value={filter} onChange={changeFilter}/>
			</Label>
		</Container>
	)
}

Filter.propTypes = {
	filter: PropTypes.string,
	changeFilter: PropTypes.func
}

const mapStateToProps = ({contacts: { filter }}) => ({
	filter
})

const mapDispatchToProps = (dispatch) => ({
	changeFilter: (event) => dispatch(actions.changeFilter(event.target.value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter);