/**
 * Main page for searching for a provider and adding to page with their tasks
 */
import React, { Component } from 'react';
import { SearchOutlined } from '@material-ui/icons';
import { TextField, Button, Grid } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { RootState } from '../redux';
import { getAllProviders } from '../redux/modules/provider/providerService';
import { getProviders } from '../redux/modules/provider/providerSelectors';
import { getTasks } from '../redux/modules/task/taskSelectors';
import { loadTasks } from '../redux/modules/task/taskThunk';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { Provider } from '../redux/modules/provider/provider';
import { setProvider } from '../redux/modules/provider/providerActions';
import { ProviderTaskInformation } from './providerCard';
import {
    withStyles,
    Theme,
  } from '@material-ui/core/styles';

 const ColorButton = withStyles((theme: Theme) => ({
    root: {
      color: theme.palette.getContrastText('#ffd040'),
      backgroundColor: '#ffd040',
      '&:hover': {
        backgroundColor: '#ffeabf',
      },
    },
  }))(Button);

class ProviderPage extends Component<Props, State> {
    static defaultProps = {
        tasks: {}
    }

    state: State = {
        providers: [],
        selectedProvider: {} as Provider
    }

    componentDidMount() {
        if (this.props.providers.length === 0 && Object.keys(this.props.tasks).length === 0) {
            this.props.getAllProviders().then(
                allProviders =>
                    this.setState({ providers: allProviders })
            );
            this.props.loadTasks();
        }
    }

    handleSelectForSearch = (e: any, selectedOption: Provider | string) => {
        if (typeof selectedOption === 'string') {
            return;
        }
        this.setState({ selectedProvider: selectedOption });
    }

    handleOnAdd = () => {
        if (Object.keys(this.state.selectedProvider).length > 0) {
            this.props.setProvider(this.state.selectedProvider);
        }
    }

    render() {
        return (
            <div>
                <Grid container>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Autocomplete
                            data-testid="provider-search-bar"
                            id="free-solo-2-demo"
                            disableClearable
                            options={this.state.providers}
                            getOptionLabel={(option: Provider) => `${option.first_name} ${option.last_name}`}
                            onChange={this.handleSelectForSearch}
                            renderInput={(params: any) => (
                                <TextField
                                    {...params}
                                    label="Search for a provider to add"
                                    margin="normal"
                                    variant="outlined"
                                    InputProps={{
                                        ...params.InputProps, type: 'search', startAdornment: (
                                            <InputAdornment position="start">
                                                <SearchOutlined />
                                            </InputAdornment>
                                        ), endAdornment: (
                                            <ColorButton variant="contained"
                                                disabled={Object.keys(this.state.selectedProvider).length === 0}
                                                onClick={this.handleOnAdd}
                                            >
                                                Add Provider
                                            </ColorButton>
                                        )
                                    }}
                                />
                            )}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2} data-testid="provider-information">
                    {
                        this.props.providers.map(
                            provider => (
                                <Grid item lg={4} sm={6} xs={12} key={provider.doctor_id}>
                                    <ProviderTaskInformation provider={provider} />
                                </Grid>
                            )
                        )
                    }

                </Grid>
            </div>
        )
    }
}
const mapStateToProps = (state: RootState) => ({
    providers: getProviders(state),
    tasks: getTasks(state),
    loadTasks,
    getAllProviders,
    setProvider
});
const mapDispatchToProps = (dispatch: Dispatch) => {
    return bindActionCreators(
        {
            loadTasks,
            setProvider
        },
        dispatch
    );
}
type Props = ReturnType<typeof mapStateToProps> &
    ReturnType<typeof mapDispatchToProps>;
type State = {
    providers: Provider[],
    selectedProvider: Provider
}

export const ProviderPortal = connect(mapStateToProps, mapDispatchToProps)(ProviderPage);