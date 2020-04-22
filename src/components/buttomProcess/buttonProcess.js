import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Button } from 'antd';

import { ProcessActions } from '../../store';

import './buttonProcess.scss';

const ButtonProcess = ({ getProcess, processData, loading, error }) => {
	const clickButton = e => {
		getProcess();
	}

	if (error)
		return "Error";

	return (
		<div className='buttonProcess'>
			<Button size={'large'} type="primary" onClick={clickButton} loading={loading}>Carregar processos</Button>
			<div className="content-process">{processData ? JSON.stringify(processData) : 'Nenhum processo carregado'}</div>
		</div>
	)
}

const mapStateToProps = state => {
	const { process } = state;

	return {
		processData: process.processData,
		loading: process.loading,
		error: process.error
	};
};

const mapDispatchToProps = dispatch => bindActionCreators({ ...ProcessActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ButtonProcess);