import { LightningElement, api } from 'lwc';
export default class LwcResetForm extends LightningElement{
@api recordId;
@api objectApiName='Contact';
@api disableButton;
disabledButton = true;
resetFormAction(event)
{
    const lwcInputFields = this.template.querySelectorAll('lightning-input-field');
    if(lwcInputField)
    {
        lwcInputField.forEach(field => 
            {
                field.reset();
            });
    }
}
}
