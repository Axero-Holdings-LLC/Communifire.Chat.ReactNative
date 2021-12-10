import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

import SafeAreaView from '../containers/SafeAreaView';
import { themes } from '../constants/colors';
import * as HeaderButton from '../containers/HeaderButton';
import Markdown from '../containers/markdown';
import { withTheme } from '../theme';
import I18n from '../i18n';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 44,
		paddingTop: 32
	},
	info: {
		fontSize: 14,
		marginVertical: 8
	}
});

interface INavigation {
	navigation: StackNavigationProp<any, 'E2EHowItWorksView'>;
	route: RouteProp<{ E2EHowItWorksView: { showCloseModal: boolean } }, 'E2EHowItWorksView'>;
}

interface IE2EHowItWorksViewProps extends INavigation {
	theme: string;
}

class E2EHowItWorksView extends React.Component<IE2EHowItWorksViewProps, any> {
	static navigationOptions = ({ route, navigation }: INavigation) => {
		const showCloseModal = route.params?.showCloseModal;
		return {
			title: I18n.t('How_It_Works'),
			headerLeft: showCloseModal ? () => <HeaderButton.CloseModal navigation={navigation} /> : undefined
		};
	};

	render() {
		const { theme } = this.props;

		const infoStyle = [styles.info, { color: themes[theme].bodyText }];

		// TODO: Refactor when migrate Markdown
		return (
			<SafeAreaView style={[styles.container, { backgroundColor: themes[theme].backgroundColor }]} testID='e2e-how-it-works-view'>
				{/* @ts-ignore */}
				<Markdown msg={I18n.t('E2E_How_It_Works_info1')} style={infoStyle} theme={theme} />
				{/* @ts-ignore */}
				<Markdown msg={I18n.t('E2E_How_It_Works_info2')} style={infoStyle} theme={theme} />
				{/* @ts-ignore */}
				<Markdown msg={I18n.t('E2E_How_It_Works_info3')} style={infoStyle} theme={theme} />
				{/* @ts-ignore */}
				<Markdown msg={I18n.t('E2E_How_It_Works_info4')} style={infoStyle} theme={theme} />
			</SafeAreaView>
		);
	}
}

export default withTheme(E2EHowItWorksView);
