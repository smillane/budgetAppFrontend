// import { useState } from 'react';
// import { Navbar, SegmentedControl, Text, createStyles, getStylesRef, rem } from '@mantine/core';
// import {
// 	IconHome2,
// 	IconReceipt,
// 	IconPigMoney,
// 	IconReportMoney,
// 	IconLogout,
//   IconReport
// } from '@tabler/icons-react';

// import { usePathname } from 'next/navigation';

// const useStyles = createStyles((theme) => ({
// 	navbar: {
// 		backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
// 	},

// 	title: {
// 		textTransform: 'uppercase',
// 		letterSpacing: rem(-0.25),
// 	},

// 	link: {
// 		...theme.fn.focusStyles(),
// 		display: 'flex',
// 		alignItems: 'center',
// 		textDecoration: 'none',
// 		fontSize: theme.fontSizes.sm,
// 		color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
// 		padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
// 		borderRadius: theme.radius.sm,
// 		fontWeight: 500,

// 		'&:hover': {
// 			backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
// 			color: theme.colorScheme === 'dark' ? theme.white : theme.black,

// 			[`& .${getStylesRef('icon')}`]: {
// 				color: theme.colorScheme === 'dark' ? theme.white : theme.black,
// 			},
// 		},
// 	},

// 	linkIcon: {
// 		ref: getStylesRef('icon'),
// 		color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
// 		marginRight: theme.spacing.sm,
// 	},

// 	linkActive: {
// 		'&, &:hover': {
// 			backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
// 			color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
// 			[`& .${getStylesRef('icon')}`]: {
// 				color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
// 			},
// 		},
// 	},

// 	footer: {
// 		borderTop: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]}`,
// 		paddingTop: theme.spacing.md,
// 	},
// }));

// const tabs = [
// 		{ link: '/app/dashboard', label: 'Dashboard', icon: IconHome2 },
// 		{ link: '/app/budget', label: 'Budget', icon: IconReportMoney },
// 		{ link: '/app/transactions', label: 'Transactions', icon: IconReceipt },
// 		{ link: '/app/investments', label: 'Investments', icon: IconPigMoney },
// 		{ link: '/app/reports', label: 'Reports', icon: IconReport }
// ];

// export function NavbarSegmented() {
// 	const pathname = usePathname();
// 	const pathnameSplit = pathname.split('/').at(1);
//   const path = pathname?.split('/')?.at(2)
// 	const { classes, cx } = useStyles();
// 	const [active, setActive] = useState(path?.charAt(0)?.toUpperCase() + path?.slice(1));

// 	const links = tabs.map((item) => (
// 		<a
// 			className={cx(classes.link, { [classes.linkActive]: item.label === active })}
// 			href={item.link}
// 			key={item.label}
// 			onClick={() => {
// 				setActive(item.label);
// 			}}
// 		>
// 			<item.icon className={classes.linkIcon} stroke={1.5} />
// 			<span>{item.label}</span>
// 		</a>
// 	));

// 	if (pathnameSplit.includes('app')) {
// 		return (
// 			<Navbar height={840} width={{ sm: 300 }} p='md' className={classes.navbar}>
// 				<Navbar.Section grow mt='xl'>
// 					{links}
// 				</Navbar.Section>

// 				<Navbar.Section className={classes.footer}>
// 					<a href='#' className={classes.link} onClick={(event) => event.preventDefault()}>
// 						<IconLogout className={classes.linkIcon} stroke={1.5} />
// 						<span>Account</span>
// 					</a>
// 				</Navbar.Section>
// 			</Navbar>
// 		);
// 	}
// 	return <></>;
// }
