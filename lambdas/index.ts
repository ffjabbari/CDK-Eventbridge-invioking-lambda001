import { Handler } from 'aws-lambda';

export const handler: Handler = async (event, context): Promise<void> => {
	console.log('Hello!', event);
	await new Promise(resolve => setTimeout(resolve, 1000));
	console.log('Goodbye!');
};