import React, { Component, useState } from 'react';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import { TextField } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { RootState } from './redux';
import { loadAllProviders } from './redux/modules/provider/providerThunk';
import { getProviders } from './redux/modules/provider/providerSelectors';
import { getTasks } from './redux/modules/task/taskSelectors';
import { loadTasks } from './redux/modules/task/taskThunk';
import { loadAllProvidersAndTasks } from './redux/thunks/loadDataThunk';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { Provider } from './redux/modules/provider/provider';

class ProviderPage extends Component<Props> {
    static defaultProps = {
        providers: [],
        tasks: {}
    }


    componentDidMount() {
        if (this.props.providers.length === 0 && Object.keys(this.props.tasks).length === 0) {
            // this.props.loadAllProvidersAndTasks();
            this.props.loadAllProviders();
            this.props.loadTasks();
        }
    }

    render() {
        return (
        <div style={{ width: 300 }}>
            <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                options={this.props.providers.map((option: Provider) => `${option.first_name} ${option.last_name}`)}
                clearOnEscape
                renderInput={(params: any) => (
                    <TextField
                        {...params}
                        label="Search input"
                        margin="normal"
                        variant="outlined"
                        InputProps={{
                            ...params.InputProps, type: 'search', startAdornment: (
                                <InputAdornment position="start">
                                    <SearchOutlined />
                                </InputAdornment>
                            ),
                        }}
                    />
                )}
            />
        </div>
        )
    }
}
const mapStateToProps = (state: RootState) => ({
    providers: getProviders(state),
    tasks: getTasks(state),
    loadAllProvidersAndTasks,
    loadAllProviders,
    loadTasks
});
const mapDispatchToProps = (dispatch: Dispatch) => {
    return bindActionCreators(
        {
          loadAllProvidersAndTasks,
          loadAllProviders,
          loadTasks
        },
        dispatch
      );
  }
type Props = ReturnType<typeof mapStateToProps> &
ReturnType<typeof mapDispatchToProps>;

export const ProviderPortal = connect(mapStateToProps, mapDispatchToProps)(ProviderPage);