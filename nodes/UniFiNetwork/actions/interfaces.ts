import { AllEntities, Entity, PropertiesOf } from "n8n-workflow";

type UniFiMap = {
	device: 'get' | 'getAll';
	site: 'getAll';
}

export type UniFi = AllEntities<UniFiMap>;

export type UnifiDevice = Entity<UniFiMap, 'device'>;
export type UniFiSite = Entity<UniFiMap, 'site'>;

export type DeviceProperties = PropertiesOf<UnifiDevice>;
export type SiteProperties = PropertiesOf<UniFiSite>;
