''' Component Standalone Example Test '''

import unittest

from selenium import webdriver
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities

class ComponentExampleStandaloneTest(unittest.TestCase):
    def setUp(self):
        self.driver = webdriver.Remote(command_executor='http://127.0.0.1:8910',desired_capabilities=DesiredCapabilities.PHANTOMJS)
        self.component_target_url = 'http://localhost:8080/component-example-standalone.html'

    def test_header(self):
        self.driver.get(self.component_target_url)
        self.header = self.driver.find_element_by_css_selector('h1')
        self.assertEqual(self.header.text,'Component Example Standalone')

    def test_paragraph(self):
        self.driver.get(self.component_target_url)
        self.paragraph = self.driver.find_element_by_css_selector('p')
        self.assertEqual(self.paragraph.text,'Modularized architecture')

    def test_hr(self):
        self.driver.get(self.component_target_url)
        self.hr = self.driver.find_elements_by_css_selector('hr')
        self.assertTrue(len(self.hr) == 3)

    def test_sub_header(self):
        self.driver.get(self.component_target_url)
        self.sub_header = self.driver.find_element_by_tag_name('h2')
        self.assertEqual(self.sub_header.text,'List items')

    def test_component_list(self):
        self.driver.get(self.component_target_url)
        self.li = self.driver.find_elements_by_css_selector('ul.component-example-standalone > li')
        self.assertTrue(len(self.li) == 3)

    def test_component_input(self):
        self.driver.get(self.component_target_url)
        self.input = self.driver.find_element_by_tag_name('input')
        self.assertTrue(self.input)

    def test_component_textarea(self):
        self.driver.get(self.component_target_url)
        self.textarea = self.driver.find_element_by_tag_name('textarea')
        self.assertTrue(self.textarea)

if __name__ == '__main__':
    unittest.main(verbosity=2)


