import React from 'react';
import Stepper from '@material-ui/core/Stepper';import Step from '@material-ui/core/Step';import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import IntlMessages from 'util/IntlMessages';
import Dropzone from 'react-dropzone';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';

function getFundraisingDetails() {
    return <div>
        <div className="row">
            <div className="card-heading col-md-12"><h2>Fundraising Details</h2></div>
        </div>
        <div className="row">
            <div className="col-md-6">
                <div className="form-group">
                    <TextField
                        id="fullName"
                        label="Full Name"
                        margin="normal"
                        fullWidth
                    /></div>
            </div>
            <div className="col-md-6">
                <div className="form-group">
                    <TextField
                        id="userEmail"
                        label="User Name"
                        margin="normal"
                        fullWidth
                    />
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12">
                <div className="form-group">
                    <TextField
                        id="aboutUser"
                        label="Write Something About You"
                        margin="normal"
                        multiline
                        rowsMax="4"
                        fullWidth
                    /></div>
            </div>
        </div>
    </div>

}

function getAdditionalDocuments() {
    return <div className="tab-pane" id="tab2-3">
        <div className="row">
            <div className="card-heading col-md-12"><h2>Additional Documents</h2></div>
        </div>
        <div className="row">
            <div className="col-md-12">
                <Dropzone
                    accept=".jpeg,.png"
                    onDrop={(accepted, rejected) => {
                        this.setState({accepted, rejected});
                    }}
                >
                    {({isDragActive, isDragReject}) => {
                        if (isDragActive) {
                            return 'All files will be accepted';
                        }
                        if (isDragReject) {
                            return 'Some files will be rejected';
                        }
                        return 'Dropping some files here...';
                    }}
                </Dropzone>
            </div>
        </div>
    </div>
}

function getLegalParties() {
    return <div>
        <div className="row">
            <div className="card-heading col-md-12"><h2>Legal Parties</h2></div>
        </div>
        <div className="row">
            <div className="col-md-6">
                <div className="form-group">
                    <TextField
                        id="fullName"
                        label="Full Name"
                        margin="normal"
                        fullWidth
                    /></div>
            </div>
            <div className="col-md-6">
                <div className="form-group">
                    <TextField
                        id="userEmail"
                        label="User Name"
                        margin="normal"
                        fullWidth
                    />
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12">
                <div className="form-group">
                    <TextField
                        id="aboutUser"
                        label="Write Something About You"
                        margin="normal"
                        multiline
                        rowsMax="4"
                        fullWidth
                    /></div>
            </div>
        </div>
    </div>

}

function getConfirmation() {
    return <div>
        <div className="row">
            <div className="card-heading col-md-12"><h2>Completed</h2></div>
        </div>
        <div className="row">
            <div className="col-md-12">
                <div className="form-group">
                    <TextField
                        id="aboutUser"
                        label="Write Something About You"
                        margin="normal"
                        multiline
                        rowsMax="4"
                        fullWidth
                    /></div>
            </div>
        </div>
    </div>
}


class TokenizationFlow extends React.Component {
    state = {
        activeStep: 0,
        projectType: "",
        assertType: "",
        geoFocus: "",
        countryFocus1: "",
        countryFocus2: "",
        projectCategory: "",
        accepted: [],
        rejected: []
    };

    handleChange = name => event => {
        this.setState({[name]: event.target.value});
    };

    handleNext = () => {
        const {activeStep} = this.state;
        this.setState({
            activeStep: activeStep + 1,
        });
    };

    handleBack = () => {
        const {activeStep} = this.state;
        this.setState({
            activeStep: activeStep - 1,
        });
    };

    handleReset = () => {
        this.setState({
            activeStep: 0,
        });
    };

    getProjectInformation(){
        return <div>
            <div className="row">
                <div className="card-heading col-md-12"><h2>{<IntlMessages id="component.tokenization.generalProjectInformation"/>}</h2></div>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <FormControl className="w-100"  margin="normal">

                                    <InputLabel htmlFor="projectType">{<IntlMessages id="component.tokenization.label.projectType"/>}</InputLabel>
                                    <Select
                                        value={this.state.projectType}
                                        onChange={this.handleChange('projectType')}
                                        input={<Input id="projectType"/>}
                                    >
                                        <MenuItem value={10}>Existing Project</MenuItem>
                                        <MenuItem value={20}>Current Fundraising</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <FormControl className="w-100"  margin="normal">
                                    <InputLabel htmlFor="assertType">{<IntlMessages id="component.tokenization.label.assetType"/>}</InputLabel>
                                    <Select
                                        value={this.state.assertType}
                                        onChange={this.handleChange('assertType')}
                                        input={<Input id="assertType"/>}
                                    >
                                        <MenuItem value={10}>Water</MenuItem>
                                        <MenuItem value={20}>Solar</MenuItem>
                                        <MenuItem value={30}>Biomass</MenuItem>
                                        <MenuItem value={40}>Wind</MenuItem>
                                        <MenuItem value={50}>Biogas</MenuItem>
                                        <MenuItem value={60}>Energy Efficiency</MenuItem>

                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <TextField
                                    id="assetName"
                                    margin="normal"
                                    label={<IntlMessages id="component.tokenization.label.assetName"/>}
                                    fullWidth
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <FormControl className="w-100"  margin="normal">
                                    <InputLabel htmlFor="geoFocus">{<IntlMessages id="component.tokenization.label.geoFocus"/>}</InputLabel>
                                    <Select
                                        value={this.state.geoFocus}
                                        onChange={this.handleChange('geoFocus')}
                                        input={<Input id="geoFocus"/>}
                                    >
                                        <MenuItem value={10}>Europe</MenuItem>
                                        <MenuItem value={20}>Asia</MenuItem>
                                        <MenuItem value={30}>North America</MenuItem>
                                        <MenuItem value={40}>South America</MenuItem>
                                        <MenuItem value={50}>Africa</MenuItem>

                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <FormControl className="w-100"  margin="normal">
                                    <InputLabel htmlFor="countryFocus1">{<IntlMessages id="component.tokenization.label.countryFocus1"/>}</InputLabel>
                                    <Select
                                        value={this.state.countryFocus1}
                                        onChange={this.handleChange('countryFocus1')}
                                        input={<Input id="countryFocus1"/>}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Switzerland</MenuItem>
                                        <MenuItem value={20}>Brazil</MenuItem>
                                        <MenuItem value={30}>USA</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <FormControl className="w-100"  margin="normal">
                                    <InputLabel htmlFor="projectCategory">{<IntlMessages id="component.tokenization.label.projectCategory"/>}</InputLabel>
                                    <Select
                                        value={this.state.projectCategory}
                                        onChange={this.handleChange('projectCategory')}
                                        input={<Input id="projectCategory"/>}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Carbon</MenuItem>
                                        <MenuItem value={20}>Energy Efficiency</MenuItem>
                                        <MenuItem value={30}>Water Quality</MenuItem>
                                        <MenuItem value={40}>Biodiversity And Habitat</MenuItem>
                                        <MenuItem value={50}>Water</MenuItem>
                                        <MenuItem value={60}>Social</MenuItem>
                                        <MenuItem value={70}>REDD</MenuItem>
                                        <MenuItem value={70}>Forrest Conservation & Avoided</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                        <div className="col-md-6">
                           &nbsp;
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-12 p-2 ">
                            <div className="form-group nudge">
                                <TextField
                                    rows="5"
                                    label="About"
                                    placeholder="Describe your project here"
                                    multiline
                                    margin="normal"
                                    fullWidth
                                />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <TextField
                                    rows="5"
                                    label="Highlights"
                                    placeholder="Project Highlights"
                                    multiline
                                    margin="normal"
                                    fullWidth
                                />
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 mb-5">
                    <div className="form-group-dropzone pt-2">
                        <InputLabel htmlFor="about">Upload Project image</InputLabel>
                        <Dropzone
                            name="projectImage"
                            className="dropDefault"
                            accept=".jpeg,.png"
                            onDrop={(accepted, rejected) => {
                                this.setState({accepted, rejected});
                            }}
                        >
                            {({isDragActive, isDragReject}) => {
                                if (isDragActive) {
                                    return 'All files will be accepted';
                                }
                                if (isDragReject) {
                                    return 'Some files will be rejected';
                                }
                                return 'Drag here or browse to upload';
                            }}
                        </Dropzone>
                    </div>
                </div>
            </div>

        </div>
    };

    getSteps() {
        return ['', '', '', ''];
        // return ['General project information', 'Fundraising details', 'Additional documents', 'Legal parties', 'Confirm and Finish'];
    }

    getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return this.getProjectInformation();
            case 1:
                return getFundraisingDetails();
            case 2:
                return getAdditionalDocuments();
            case 3:
                return getLegalParties();
            default:
                return 'Unknown stepIndex';
        }
    }

    render() {
        const steps = this.getSteps();
        const {activeStep} = this.state;

        return (
            <div className="w-100">
                <div>
                    <h1>Create New Tokenized Asset</h1>
                    <h5>* Required Data</h5>
                </div>
                <Stepper activeStep={activeStep} alternativeLabel className="horizontal-stepper-linear">
                    {steps.map((label, index) => {
                        return (
                            <Step key={label} className={`horizontal-stepper ${index === activeStep ? 'active' : ''}`}>
                                <StepLabel className="stepperlabel">{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                <div>
                    {this.state.activeStep === steps.length ? (
                        <div>
                            {getConfirmation()}
                            <div>
                                <Button onClick={this.handleReset}>Reset</Button>
                            </div>
                        </div>
                    ) : (
                        <div>
                            {this.getStepContent(activeStep)}
                            <div>
                                <Button
                                    disabled={activeStep === 0}
                                    onClick={this.handleBack}
                                    className="mr-2"
                                >
                                    Back
                                </Button>
                                <Button variant="raised" color="primary" onClick={this.handleNext}>
                                    {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default TokenizationFlow;