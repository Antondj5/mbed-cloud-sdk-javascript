import * as ejs from "ejs";
import { Container } from "../container";
import { ParameterContainer } from "../parameterContainer/parameterContainer";
import { ParameterBucketContainer } from "../parameterBucketContainer/parameterBucketContainer";

export class ParameterListContainer extends Container {

    public parameters: Array<ParameterContainer>;
    public bucket: ParameterBucketContainer;

    constructor(options?: { parameters?: Array<ParameterContainer>, bucket?: ParameterBucketContainer }) {
        super();
        options = options || {};
        const { parameters, bucket } = options;
        this.parameters = parameters || [];
        this.bucket = bucket;
    }

    public addParameters(parameters: ParameterContainer | Array<ParameterContainer>) {
        if (parameters instanceof Array) {
            this.parameters = this.parameters.concat(parameters);
        } else {
            this.parameters.push(parameters);
        }
    }

    public getParameters(): Promise<Array<string>> {
        return Promise.all(this.parameters.map(async p => p.render()));
    }

    public async render(): Promise<string> {
        this.parameters = this.parameters.sort((a, b) => {
            return (a.isRequired === b.isRequired) ? 0 : a.isRequired ? -1 : 1;
        });
        // parameters are inserted in order from config so give them position number here for use by the schema file
        for (let i = 0; i < this.parameters.length; i++) {
            this.parameters[i].position = i;
        }
        const bucket = this.bucket ? await this.bucket.render() : "";
        return await ejs.renderFile<string>("generator/containers/parameterListContainer/parameterList.ejs", { parameters: await this.getParameters(), bucket });
    }

}
