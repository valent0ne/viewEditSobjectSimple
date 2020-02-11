import { LightningElement, api } from 'lwc';
import { FlowAttributeChangeEvent, FlowNavigationNextEvent } from 'lightning/flowSupport';

export default class ViewEditSobjectSimple extends LightningElement {
    
    @api objectApiName;
    @api availableActions = [];
    @api recordTypeId;
    @api recordId;

    handleSubmit() {
    }
    
    handleSuccess(event) {
        this.recordId = event.detail.id;
        this.notifyChangeToFlow('recordId', this.recordId);
        this.handleGoNext();
    }

    notifyChangeToFlow(attributeName, attributeValue) {
        const attributeChangeEvent = new FlowAttributeChangeEvent(attributeName, attributeValue);
        this.dispatchEvent(attributeChangeEvent);
    }

    handleGoNext() {
        // check if NEXT is allowed on this screen
        if (this.availableActions.find(action => action === 'NEXT')) {
            // navigate to the next screen
            const navigateNextEvent = new FlowNavigationNextEvent();
            this.dispatchEvent(navigateNextEvent);
        }
    }

}