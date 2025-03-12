import { DeviceProperties } from "../../interfaces";

export const getDevices: DeviceProperties = [
	{
		displayName: 'Host ID',
		name: 'hostId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['device'],
				operation: ['getAll'],
			},
		},
	},
];
