import React from 'react';
import HorizontalLabelPositionBelowStepper from 'app/routes/components/routes/stepper/linear/HorizontalLabelPositionBelowStepper';
import TokenizationFlow from './TokenizationFlow'

import CardBox from 'components/CardBox';
import ContainerHeader from 'components/ContainerHeader';
import IntlMessages from 'util/IntlMessages';

const Tokenization = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <div className="row mb-md-4">
                <CardBox styleName="col-lg-12" childrenStyle="d-flex justify-content-center"
                         heading={<IntlMessages
                             id="component.stepper.horizontalLinearAlternativeLabel"/>}
                         headerOutside>
                    <TokenizationFlow/>

                </CardBox>
            </div>
        </div>
    );
};

export default (Tokenization);
