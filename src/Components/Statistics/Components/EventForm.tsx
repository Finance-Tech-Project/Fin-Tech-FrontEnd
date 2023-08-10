import { Button, Checkbox, Input, Stack } from '@chakra-ui/react';
import React, { MouseEventHandler, useState } from 'react'
import { useNewMoralisObject } from "react-moralis";
import { ChartEvents } from '../../../Types/chartTVTypes';

const EventForm = (props: { handleSubmit: (arg0: { name: string; doxxed: boolean; audit: boolean; staySafuScan: boolean; reflections: boolean; socials: boolean; earlySaleDate: Date; liquidityDate: Date; taxCap: boolean; elevatedTax: boolean; lowTax: boolean; noTax: boolean; }) => void; }) => {
	const [coin, setCoin] = useState<ChartEvents>({
		name: '',
		doxxed: false,
		audit: false,
		staySafuScan: false,
		reflections: false,
		socials: false,
		earlySaleDate: new Date(),
		liquidityDate: new Date(),
		taxCap: false,
		elevatedTax: false,
		lowTax: false,
		noTax: false
	});
	const { isSaving, error, save } = useNewMoralisObject('Event');

	const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		event.preventDefault();
		props.handleSubmit(coin);
	};
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const target = event.target;
		const name = target.name;

		let value: string | boolean = '';
		if (target.type === 'checkbox') {
			value = target.checked
		} else {
			value = target.value;
		}
		setCoin((prev) => {
			let newCoin = Object.assign({}, prev);
			newCoin[name] = value;
			return newCoin;
		});
	};
	return (
		<div>
			{/* <p>preview {JSON.stringify(coin)}</p> */}
			<fieldset>
				<legend>Basic Info</legend>
				<label>Token Name</label>
				<Input
					type="text"
					name="name"
					value={coin.name}
					onChange={event => handleChange(event)}
				/>
			</fieldset>
			<fieldset>
				<legend>Due Dilligence</legend>

				<Stack>
					<Checkbox name="doxxed" id="doxxed" isChecked={coin.doxxed} onChange={handleChange}>
						Doxxed Founders
					</Checkbox>

					<Checkbox name="audit" id="auditcb" isChecked={coin.audit} onChange={handleChange}>
						Contract Audit
					</Checkbox>

					<Checkbox name="taxCap" id="taxcapcb" isChecked={coin.taxCap} onChange={handleChange}>
						Maximum cap on taxes in contract
					</Checkbox>

					<Checkbox name="elevatedTax" id="elevatedtaxcb" isChecked={coin.elevatedTax} onChange={handleChange}>
						Elevated taxes
					</Checkbox>

					<Checkbox name="lowTax" id="lowtaxcb" isChecked={coin.lowTax} onChange={handleChange}>
						Low taxes
					</Checkbox>

					<Checkbox name="noTax" id="notaxcb" isChecked={coin.noTax} onChange={handleChange}>
						no tax
					</Checkbox>

					<Checkbox name="staySafuScan" id="staysafucb" isChecked={coin.staySafuScan} onChange={handleChange}>
						StaySafu scan
					</Checkbox>

					<Checkbox name="reflections" id="reflectionscb" isChecked={coin.reflections} onChange={handleChange}>
						Reflections
					</Checkbox>

					<Checkbox name="socials" id="socialscb" isChecked={coin.socials} onChange={handleChange}>
						Socials
					</Checkbox>
				</Stack>
			</fieldset>
			<fieldset>
				<legend>Early Sale Start Date</legend>
				<label>Date: </label>
				<Input type="text" name="earlySaleDate" onChange={handleChange} />
			</fieldset>
			<fieldset>
				<legend>Liquidity Launch Date</legend>
				<label>Date: </label>
				<Input type="text" name="liquidityDate" onChange={handleChange} />
			</fieldset>
			<fieldset>
				<Button type="submit" onClick={event => handleSubmit(event)}>
					Save
				</Button>
			</fieldset>
		</div>
	)
}

export default EventForm	