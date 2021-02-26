import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../../redux/phoneBook/phoneBook-actions';

import { ButtonDelete, Li, Name, Number, NameAndBtn } from './ContactItem.css';

const ContactItem = ({ id, name, number, deleteContact }) => {

	return (
		<Li>
			<Name>{name}:</Name>
			<NameAndBtn>
				<Number>{number}</Number> 
				<ButtonDelete
					type="button"
					onClick={() => deleteContact(id)}>
					&#x2716;
				</ButtonDelete>
			</NameAndBtn>
		</Li>		
	)
}

ContactItem.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	number: PropTypes.string,
	deleteContact: PropTypes.func
}

const mapDispatchToProps = (dispatch) => ({
	deleteContact: id => dispatch(actions.deleteContact(id))
})

export default connect(null, mapDispatchToProps)(ContactItem);