/****************************************************************************
 * Copyright (C) 2017 EPAM Systems
 *
 * This file is part of the Ketcher
 * The contents are covered by the terms of the BSD 3-Clause license
 * which is included in the file LICENSE.md, found at the root
 * of the Ketcher source tree.
 ***************************************************************************/

import { mapOf } from '../utils';

const radioButtonsSchema =  {
	enum: [
		"Absolute",
		"Relative",
		"Attached"
	],
	default: "Absolute"
};

const contextSchema = {
	title: 'Context',
	enum: [
		'Fragment',
		'Bond',
		'Atom',
		'Group'
	],
	default: 'Fragment'
};

const sData = {
	Fragment: {
		title: 'Context',
		type: 'Object',
		oneOf: [
			{
				key: 'FRG_STR',
				title: 'MDLBG_FRAGMENT_STEREO',
				properties: {
					type: { enum: ["DAT"] },
					fieldName: {
						title: 'Field name',
						enum: ["MDLBG_FRAGMENT_STEREO"],
						default: "MDLBG_FRAGMENT_STEREO"
					},
					fieldValue: {
						title: "Field value",
						enum: [
							"abs",
							"(+)-enantiomer",
							"(-)-enantiomer",
							"racemate",
							"steric",
							"rel",
							"R(a)",
							"S(a)",
							"R(p)",
							"S(p)"
						],
						default: "abs"
					},
					radiobuttons: radioButtonsSchema
				},
				required: ["fieldName", "fieldValue", "radiobuttons"]
			},
			{
				key: 'FRG_COEFF',
				title: 'MDLBG_FRAGMENT_COEFFICIENT',
				properties: {
					type: { enum: ["DAT"] },
					fieldName: {
						title: "Field name",
						enum: ["MDLBG_FRAGMENT_COEFFICIENT"],
						default: "MDLBG_FRAGMENT_COEFFICIENT"
					},
					fieldValue: {
						title: "Field value",
						type: "string",
						default: "",
						minLength: 1,
						invalidMessage: "Please, specify field name"
					},
					radiobuttons: radioButtonsSchema
				},
				required: ["fieldName", "fieldValue", "radiobuttons"]
			},
			{
				key: 'FRG_CHRG',
				title: 'MDLBG_FRAGMENT_CHARGE',
				properties: {
					type: { enum: ["DAT"] },
					fieldName: {
						title: 'Field name',
						enum: ["MDLBG_FRAGMENT_CHARGE"],
						default: "MDLBG_FRAGMENT_CHARGE"
					},
					fieldValue: {
						title: "Field value",
						type: "string",
						default: "",
						minLength: 1,
						invalidMessage: "Please, specify field name"
					},
					radiobuttons: radioButtonsSchema
				},
				required: ["fieldName", "fieldValue", "radiobuttons"]
			},
			{
				key: 'FRG_RAD',
				title: 'MDLBG_FRAGMENT_RADICALS',
				properties: {
					type: { enum: ["DAT"] },
					fieldName: {
						title: "Field name",
						enum: ["MDLBG_FRAGMENT_RADICALS"],
						default: "MDLBG_FRAGMENT_RADICALS"
					},
					fieldValue: {
						title: "Field value",
						type: "string",
						default: "",
						minLength: 1,
						invalidMessage: "Please, specify field name"
					},
					radiobuttons: radioButtonsSchema
				},
				required: ["fieldName", "fieldValue", "radiobuttons"]
			},
		]
	},
	Bond: {
		title: 'Bond',
		type: 'Object',
		oneOf: [
			{
				key: 'SB_STR',
				title: 'MDLBG_STEREO_KEY',
				properties: {
					type: { enum: ["DAT"] },
					fieldName: {
						title: "Field name",
						enum: ["MDLBG_STEREO_KEY"],
						default: "MDLBG_STEREO_KEY"
					},
					fieldValue: {
						title: "Field value",
						enum: [
							"erythro",
							"threo",
							"alpha",
							"beta",
							"endo",
							"exo",
							"anti",
							"syn",
							"ECL",
							"STG"
						],
						default: "erythro"
					},
					radiobuttons: radioButtonsSchema
				},
				required: ["fieldName", "fieldValue", "radiobuttons"]
			},
			{
				key: 'SB_BND',
				title: 'MDLBG_BOND_KEY',
				properties: {
					type: { enum: ["DAT"] },
					fieldName: {
						title: "Field name",
						enum: ["MDLBG_BOND_KEY"],
						default: "MDLBG_BOND_KEY"
					},
					fieldValue: {
						title: "Field value",
						enum: [
							"Value=4"
						],
						default: "Value=4"
					},
					radiobuttons: radioButtonsSchema
				},
				required: ["fieldName", "fieldValue", "radiobuttons"]
			}
		]
	},
	Atom: {
		title: 'Atom',
		type: 'Object',
		oneOf: [
			{
				key: 'AT_STR',
				title: 'MDLBG_STEREO_KEY',
				properties: {
					type: { enum: ["DAT"] },
					fieldName: {
						title: "Field name",
						enum: ["MDLBG_STEREO_KEY"],
						default: "MDLBG_STEREO_KEY"
					},
					fieldValue: {
						title: "Field value",
						enum: [
							"RS",
							"SR",
							"P-3",
							"P-3-PI",
							"SP-4",
							"SP-4-PI",
							"T-4",
							"T-4-PI",
							"SP-5",
							"SP-5-PI",
							"TB-5",
							"TB-5-PI",
							"OC-6",
							"TP-6",
							"PB-7",
							"CU-8",
							"SA-8",
							"DD-8",
							"HB-9",
							"TPS-9"
						],
						default: "RS"
					},
					radiobuttons: radioButtonsSchema
				},
				required: ["fieldName", "fieldValue", "radiobuttons"]
			}
		]
	},
	Group: {
		title: 'Group',
		type: 'Object',
		oneOf: [
			{
				key: 'GRP_STR',
				title: 'MDLBG_STEREO_KEY',
				properties: {
					type: { enum: ["DAT"] },
					fieldName: {
						title: "Field name",
						enum: ["MDLBG_STEREO_KEY"],
						default: "MDLBG_STEREO_KEY"
					},
					fieldValue: {
						title: "Field value",
						enum: [
							"cis",
							"trans"
						],
						default: "cis"
					},
					radiobuttons: radioButtonsSchema
				},
				required: ["fieldName", "fieldValue", "radiobuttons"]
			}
		]
	}
};

export const sdataCustomSchema = {
	key: 'Custom',
	properties: {
		type: { enum: ["DAT"] },
		context: {
			title: 'Context',
			enum: [
				'Fragment',
				'Bond',
				'Atom',
				'Group'
			],
			default: 'Fragment'
		},
		fieldName: {
			title: 'Field name',
			type: "string",
			default: "",
			minLength: 1,
			invalidMessage: "Please, specify field name"
		},
		fieldValue: {
			title: 'Field value',
			type: "string",
			default: "",
			minLength: 1,
			invalidMessage: "Please, specify field value"
		},
		radiobuttons: {
			enum: [
				"Absolute",
				"Relative",
				"Attached"
			],
			default: "Absolute"
		}
	},
	required: ["context", "fieldName", "fieldValue", "radiobuttons"]
};

export const sdataSchema = Object.keys(sData).reduce((acc, title) => {
	acc[title] = mapOf(sData[title], 'fieldName');
	Object.keys(acc[title]).forEach(fieldName => acc[title][fieldName].properties.context = contextSchema);
	return acc;
}, {});

/**
 * Returns first key of passed object
 * @param obj { object }
 */
function firstKeyOf(obj) {
	return Object.keys(obj)[0];
}

/**
 * Returns schema default values. Depends on passed arguments:
 * pass schema only -> returns default context
 * pass schema & context -> returns default fieldName
 * pass schema & context & fieldName -> returns default fieldValue
 * @param context? { string }
 * @param fieldName? { string }
 * @returns { string }
 */
export function getSdataDefault(context, fieldName) {
	if (!context && !fieldName)
		return firstKeyOf(sdataSchema);

	if (!fieldName)
		return firstKeyOf(sdataSchema[context]);

	return sdataSchema[context][fieldName] ?
		sdataSchema[context][fieldName].properties.fieldValue.default :
		'';
}