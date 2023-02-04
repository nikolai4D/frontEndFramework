export function componentSchemaFactory(
    componentTypeKey = "t_default",
    componentId = "t__default",
    subComponents = [],
    options = {})
{
    return {
        componentTypeKey,
        componentId,
        subComponents,
        options
    }
}

/**
 * Retrieve data from a getter function
 * It is the responsibility of the getter function to subscribe the component to the data
 * @type {{getter: string, data: string, parameter: string[]}}
 */
export const dynamicDataSchema = {
    getter: 'string',
    parameter: ['string'],
    data: 'object',
}

export const staticDataSchema = {
    dataSchemaType: 'string',
}