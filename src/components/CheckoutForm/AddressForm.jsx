import React,{useState} from 'react';
import { InputLabel, Select, MenuItem, Button, Grid,Typography } from '@material-ui/core';
import {useForm, FormProvider} from 'react-hook-form';
import FormInput from './FormInput';
import { commerce } from '../../lib/commerce';

const AddressForm = () => {
    const [shippingCountries,setShippingCountries] = useState([]);
    const [shippingCountry, setShippingCountry] = useState("");
    const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
    const [shippingSubdivision, setShippingSubdivision] = useState("");
    const [shippingOptions, setShippingOptions] = useState([])
    const [shippingOption, setShippingOption] = useState("")

    const methods = useForm();

    const fetchShippingCountries = async (checkOutTokenId) =>{
        const res = await commerce.services.localeListShippingCountries(checkOutTokenId);
        setShippingCountries(shippingCountries)
    }

    return (
        <div>
            <Typography variant={6} gutterBottom>Shipping address</Typography>
            <FormProvider {...methods}>
                <form onSubmit=''>
                    <Grid container spacing={3}>
                        <FormInput required name='firstName' label='First name' />
                        <FormInput required name='lastName'  label='Last name' />
                        <FormInput required name='email' label='Email' />
                        <FormInput required name='address' label='Address' />
                        <FormInput required name='city' label='City' />
                        <FormInput required name='zip' label='Zip / Postal code' />
                        
                    </Grid>
                </form>

            </FormProvider>
        </div>
    )
}

export default AddressForm;


    //                          <Grid item xs={12} sm={6}>
    //                             <InputLabel>Shipping Country</InputLabel>
    //                             <Select value={} fullWidth onChange={}>
    //                                 <MenuItem key={} value={}>
    //                                     Select Me                                
    //                                 </MenuItem>
    //                             </Select>
    //                         </Grid>
    //                         <Grid item xs={12} sm={6}>
    //                             <InputLabel>Shipping Subdivision</InputLabel>
    //                             <Select value={ } fullWidth onChange={ }>
    //                                 <MenuItem key={ } value={ }>
    //                                     Select Me
    //                                 </MenuItem>
    //                             </Select>
    //                         </Grid>
    //                         <Grid item xs={12} sm={6}>
    //                             <InputLabel>Shipping Options</InputLabel>
    //                             <Select value={ } fullWidth onChange={ }>
    //                                 <MenuItem key={ } value={ }>
    //                                     Select Me
    //                                 </MenuItem>
    //                             </Select>
    //                         </Grid>
    //2:12