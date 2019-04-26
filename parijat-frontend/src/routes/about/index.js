import { h, Component } from 'preact';
import Toolbar from 'preact-material-components/Toolbar';
import { route } from 'preact-router';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Loading from '../../components/loading';
import { getContent } from '../../api';
import style from './style';

function goHome() {
	route('/');
}

const NavigationHome = () => (
	<Toolbar.Icon navigation onClick={goHome}>
		home
	</Toolbar.Icon>
);

class ContentPage extends Component {
	constructor() {
		super();
		this.state = {
			result: null
		};
	}
	componentDidMount() {
		getContent(this.props.id).then(result => {
			this.setState({ result });
		});
	}

	render() {
		return (
			<div>
				<Header>
					<Toolbar.Section align-start>
						<NavigationHome />
						<Toolbar.Title> हाम्रो बारेमा</Toolbar.Title>
					</Toolbar.Section>
				</Header>
				<div className={style.About__Content}>
					<div className={style.About__ContentGroup}>
						<h3>सङ्ग्रहको बारेमा</h3>
						<p>
							सङ्ग्रह नेपाली‌ तथा नेपालका अरु भाषामा लेखिएको साहित्यिक रचनाको एक डिजीटल संगालो हो। 
							यस परियोजनाको उद्देश्य संसारभरि फैलिएका नेपाली‌ समुदायका साहित्यप्रेमी पाठकहरुको लागि 
							साहित्य-सिर्जनाहरु सजिलैसगँ खोजी गर्न मिल्ने ,पढ्न मिल्ने र साहित्यिक संसारमा डुब्न
							 मिल्ने अनलाइन गन्तव्य बन्नु हो । 
						</p>
						<p>
							नेपाल एक बहुभाषिक, बहु सांस्कृतिक देश हो। तर, नेपाली र नेपालका 
							अन्य भाषाहरुको धेरैजसो रचना तथा कृतिहरु इन्टरनेटमा राखिएका छैनन्। 
							राखिएका सामग्रीहरु पनि एकै ठाउँमा छैनन्, र तिनलाई खोज्न कठिन छ।हाम्रो 
							यो सङ्ग्रह.कम को उद्देश्य नेपाली र नेपालका अन्य भाषाका साहित्य सृजनाहरु 
							एकै ठाउँमा खोज्न, पढ्न र मज्जा लिन मिल्ने साझा थलो बन्ने तथा नेपाली 
							साहित्यको समग्र विकास र प्रबर्धनको लागि पैरवी गर्ने हो।

							
						</p>
						<p>
							सङ्ग्रह प्रोजेक्टको प्रमुख उद्देश्यहरु यसप्रकार छन् :
							<ul>
								<li>
									नेपाली तथा नेपालमा बोलिने अन्य भाषाको स्थापित तथा 
									नया साहित्यकारहरुका रचनाहरुलाई डिजीटाइज गर्ने
								</li>
								<li>
									साहित्यप्रेमी पाठक तथा श्रोताले सजिलै आफूले चाहेको गद्य 
									तथा पद्य रचना खोज्न सक्ने साझा थलो बन्ने
								</li>
								<li>
									नेपालका विभिन्न भाषा र तिनको विविध साहित्यिक प्रचलनको 
									बारेमा जानकारी लिने स्रोत र साधन प्रदान गर्ने
								</li>
								<li>
									संग्रह.कम को सम्पूर्ण सामग्री र सृजना निशुल्क पढ्न मिल्ने 
									तथा ओपन सोर्स कोडको मार्फत प्रयोगकर्तालाई आफुलाई चाहिने 
									लेख सामग्री अन्य भाषा वा श्रोतमा बदल्न सक्ने सुबिधा दिने
								</li>
							</ul>
						</p>
						<p>
							संग्रह.कम मा यी विशेषता हुनेछन् :
							<ul>
								<li>पाठ्य खोज (अङ्ग्रेजी तथा नेपालीमा)</li>
								<li>
									 विभिन्न समयकाल, भाषा, साहित्यकार, साहित्य विधा, 
									 प्रसङ्ग, आदिको आधारमा रचनाहरुलाई‌ वर्गीकृत गर्ने क्षमता 
								</li>
								<li>
									साहित्य तथा साहित्यकार सम्बन्धी सुचना र अन्तर्क्रियात्मक 
									सामग्रीहरु
								</li>
								<li>
									साहित्य र साहित्यकार सम्बन्धित अडियो, भिडियो, कला तथा अन्य 
									सामग्रीको लिङ्कहरु
								</li>
								<li>
									साहित्य सामग्रीको समाविष्ट भाषाहरुमा अनुवाद
								</li>
								<li>
									समाविष्ट भाषाहरुको लागि शव्दकोश (नेपाली तथा अङ्ग्रेजीमा) 
								</li>
							</ul>
						</p>
					</div>

					<div className={style.About__ContentGroup}>
						<h3>
							<a
								className={style.About__Link}
								href="http://codefornepal.org/en/"
								target="_blank"
							>
								कोड फर नेपाल
							</a>
							को बारेमा
						</h3>
						<p>
							<a
								className={style.About__Link}
								href="http://codefornepal.org/en/"
								target="_blank"
							>
								कोड फर नेपाल
							</a>{' '}
							 नेपालमा डिजिटल साक्षरता तथा खुला डाटाको प्रयोग बढाउनका लागि 
							 युनाइटेड स्टेट्स अफ अमेरिकामा दर्ता गरिएको एउटा 501(c)(3) गैर सरकारी संस्था हो| 
							 यो संस्था सन् २०१४ मा दर्ता भएको हो र त्यस बेला देखि नेपालमा डाटा र सुचनालाई 
							 सुलभ बनाउन विभिन्न पहल लिएको छ । कोड फर नेपालले गरेका प्रोजेक्टको केही 
							 उदाहरणहरु :  नेपालको राष्ट्रिय र जिल्लागत तहको तथ्याङ्क देखाउने अन्तर्क्रियात्मक 
							 वेबसाईट 
							 <a
								className={style.About__Link}
								href="https://nepalmap.org/"
								target="_blank"
							> nepalmap.org</a>,
							सार्वजनिक-आर्थिक सहायता संगठनसंग जानकारी लिन मिल्ने वेब 
							 पोर्टल  
							 <a
								className={style.About__Link}
								href="https://asknepal.info/"
								target="_blank"
							> asknepal.info</a>
							, तथा  सन् २०१५ को भुकम्पको सहयोगका लागि नेपालमा आएको 
							 अनुदानको सार्वजनिक रुपमा हिसाब किताब राख्ने वेबसाइट 
							 <a
								className={style.About__Link}
								href="http://codefornepal.org/2015/10/didugetrelief-initial-findings-code-nepal-rahat-payo-pilot-project-earthquake-relief/"
								target="_blank"
							> rahatpayo.org</a>। 
						</p>
						<p>
							यस बाहेक कोड फर नेपालले स्थानिय संघ संस्थाहरुसगँ मिलेर नेपालमा प्राविधिक सीप 
							बढाउने कार्यक्रमहरु पनिचलाउँछ । कोड फर नेपालले काठमाण्डु, दाङ, वीरगन्ज, र अन्य 
							शहरहरुमा डिजिटल प्रविधिको तालीम कार्यशाला चलाएको छ । सन् २०१८ मा कोड फर 
							नेपालकै पहलमा नेपालको पहिलो डिजीटल सम्मेलन (#DigitalNepal) जनकपुरमा आयोजना भयो । 

						</p>
					</div>
					<div className={style.About__Divider} />
					<div className={style.About__ContentGroup}>
						<h3>
							<a
								className={style.About__Link}
								href="https://github.com/Code4Nepal/bay-area"
								target="_blank"
							>
								कोड फर नेपाल को बे एरिया शाखा 
							</a>
							को बारेमा
						</h3>
						<p>
							<a
								className={style.About__Link}
								href="https://github.com/Code4Nepal/bay-area"
								target="_blank"
							>
								कोड फर नेपाल को बे एरिया शाखा 
							</a>{' '}
							सन् २०१७ को जनवरीदेखि क्रियाशील छ । यस समुहको मुख्य उद्देश्य सन् फ्रन्सिस्को 
							बे एरियामा भएका सफ्ट्वेर र सुचना प्रवृद्धि क्षेत्रमा कार्यरत स्वयंसेवकहरुलाई 
							भेटघाट गर्न र भेपाल र नेपालीको लागि डिजीटल विकासमा योगदान पुर्याउने माध्यम 
							बन्नु हो । अहिले यो समुह  मुख्यतय सङ्ग्रह को विकासमा क्रियाशील छ र पाक्षिक 
							रुपमा हरेक अर्को बुधबार बेलुकाको ७.३० बजे (पसिफिक समय) भेट्छ । यस समुहमा संलग्न 
							हुन akshara-development-list@googlegroups.com मा सम्पर्क राख्नुहोस् । 
						</p>
					</div>
					<div className={style.About__Divider} />
				</div>
				<Footer />
			</div>
		);
	}
}

export default ContentPage;
