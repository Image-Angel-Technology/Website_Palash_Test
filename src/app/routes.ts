import { createBrowserRouter } from 'react-router';
import Root from './Root';
import HomePage from './pages/HomePage';
import SolutionsPage from './pages/SolutionsPage';
import TechnologyPage from './pages/TechnologyPage';
import AboutPage from './pages/AboutPage';
import InsightsPage from './pages/InsightsPage';
import CompliancePage from './pages/CompliancePage';
import ReportPage from './pages/ReportPage';
import ContactPage from './pages/ContactPage';
import CaseStudyUKOSAPage from './pages/CaseStudyUKOSAPage';
import CaseStudyRevengePornPage from './pages/CaseStudyRevengePornPage';
import CaseStudyCommercialTheftPage from './pages/CaseStudyCommercialTheftPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import CookiePolicyPage from './pages/CookiePolicyPage';
import DPAPage from './pages/DPAPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: 'solutions', Component: SolutionsPage },
      { path: 'technology', Component: TechnologyPage },
      { path: 'about', Component: AboutPage },
      { path: 'insights', Component: InsightsPage },
      { path: 'insights/platform-compliance-uk-osa', Component: CaseStudyUKOSAPage },
      { path: 'insights/revenge-porn-distribution', Component: CaseStudyRevengePornPage },
      { path: 'insights/commercial-content-theft', Component: CaseStudyCommercialTheftPage },
      { path: 'compliance', Component: CompliancePage },
      { path: 'report', Component: ReportPage },
      { path: 'contact', Component: ContactPage },
      { path: 'privacy', Component: PrivacyPage },
      { path: 'terms', Component: TermsPage },
      { path: 'cookie-policy', Component: CookiePolicyPage },
      { path: 'dpa', Component: DPAPage },
    ],
  },
]);