import { IExecuteFunctions, INodeExecutionData, JsonObject, NodeApiError } from 'n8n-workflow';
import { UniFi } from './interfaces';

import * as device from './device';
import * as site from './site';

export async function router(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
	const items = this.getInputData();
	const operationResult: INodeExecutionData[] = [];

	for (let i = 0; i < items.length; i++) {
		const resource = this.getNodeParameter<UniFi>('resource', i);
		const operation = this.getNodeParameter('operation', i);
		let responseData: INodeExecutionData[] = [];

		const unifi = { resource, operation } as UniFi;

		try {
			switch(unifi.resource) {
				case "device":
					responseData = await device[unifi.operation].execute.call(this, i);
					break;
				case "site":
					responseData = await site[unifi.operation].execute.call(this, i);
					break;
			}

			const executionData = this.helpers.constructExecutionMetaData(responseData, {
				itemData: { item: i },
			});

			operationResult.push(...executionData);
		} catch (err) {
			if (this.continueOnFail()) {
				const executionErrorData = this.helpers.constructExecutionMetaData(
					this.helpers.returnJsonArray({ error: err.message }),
					{ itemData: { item: i }},
				);
				operationResult.push(...executionErrorData);
			} else {
				throw new NodeApiError(this.getNode(), err as JsonObject, { itemIndex: i });
			}
		}
	}

	return [operationResult];
}
