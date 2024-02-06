import React, { useCallback, useEffect, useState } from 'react';
import { usePlaidLink, PlaidLinkOnSuccess } from 'react-plaid-link';
import { Button, Container } from '@mantine/core';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/dashboard')({
  component: Dashboard,
})

export default function Dashboard() {
	return <SimplePlaidLink />;
}

const SimplePlaidLink = () => {
	const [token, setToken] = useState<string | null>(null);
	const [accessToken, setAccessToken] = useState<string | null>(null);

	// get link_token from your server when component mounts
	useEffect(() => {
		const createLinkToken = async () => {
			const response = await fetch('http://localhost:3000/api/create_link_token', { method: 'POST' });
			const { link_token } = await response.json();
			setToken(link_token);
		};
		createLinkToken();
	}, []);

	const onSuccess = useCallback<PlaidLinkOnSuccess>(async (public_token, metadata) => {
		console.log(public_token, metadata);
		// send public_token to your server
		// https://plaid.com/docs/api/tokens/#token-exchange-flow
		const response = await fetch('http://localhost:3000/api/set_access_token', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
			},
			body: JSON.stringify({ public_token }),
		});
		const { access_token, itemID, requestID } = await response.json();
		setAccessToken(access_token)
		// save token to db, related to user, to then get data later on?
		console.log(public_token, metadata);
	}, []);


	const config: Parameters<typeof usePlaidLink>[0] = {
    token: token!,
    onSuccess,
  };

	const { open, ready } = usePlaidLink(config);

	return (
		<Container>
			<Button onClick={() => open()} disabled={!ready}>
				Connect a bank account
			</Button>
		</Container>
	);
};
