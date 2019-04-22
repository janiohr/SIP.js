import { ClientContext } from "./ClientContext";
import { TypeStrings } from "./Enums";
import { IncomingResponse } from "./SIPMessage";
import { UA } from "./UA";
export declare namespace RegisterContext {
    interface RegistrationConfiguration {
        expires?: string;
        extraContactHeaderParams?: Array<string>;
        instanceId?: string;
        params?: any;
        regId?: number;
        registrar?: string;
    }
}
export declare class RegisterContext extends ClientContext {
    type: TypeStrings;
    registered: boolean;
    cseq: number;
    private options;
    private expires;
    private contact;
    private registrationTimer;
    private registrationExpiredTimer;
    private registeredBefore;
    private closeHeaders;
    constructor(ua: UA, options?: any);
    register(options?: any): void;
    close(): void;
    unregister(options?: any): void;
    unregistered(response?: IncomingResponse, cause?: string): void;
    private registrationFailure;
    private onTransportDisconnected;
    /**
     * Helper Function to generate Contact Header
     * @private
     * returns {String}
     */
    private generateContactHeader;
}
