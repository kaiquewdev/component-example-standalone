''' Component Standalone Example Test '''

import unittest

from selenium import webdriver
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities

class ComponentExampleStandaloneTest(unittest.TestCase):
    def setUp(self):
        self.driver = webdriver.Remote(command_executor='http://127.0.0.1:8910',desired_capabilities=DesiredCapabilities.PHANTOMJS)

    def test_component_list(self):
        self.driver.get('http://localhost:8080/component-example-standalone.html')
        self.li = self.driver.find_elements_by_css_selector('ul.component-example-standalone > li')
        self.assertTrue(len(self.li) == 3)

if __name__ == '__main__':
    unittest.main(verbosity=2)


