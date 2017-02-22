'''Generate component'''

import os

class Link(object):
    def __init__(self,rel="stylesheet",href="./css/component-example-standalone.css"):
        self.rel = rel
        self.href = href

    def __str__(self):
        return '<link rel="%s" href="%s">' % (self.rel,self.href)

class Header(object):
    def __init__(self,html='Component Example Standalone',index=1):
        self.index = index
        self.html = html

    def __str__(self):
        return '<h%s>%s</h%s>' % (self.index,self.html,self.index)

class Paragraph(object):
    def __init__(self,html='Modularized architecture'):
        self.html = html

    def __str__(self):
        return '<p>%s</p>' % (self.html)

class Hr(object):
    def __init__(self):
        pass

    def __str__(self):
        return '<hr></hr>'

class SubHeader(object):
    def __init__(self,html='List items',index=2):
        self.index = index
        self.html = html

    def __str__(self):
        return '<h%s>%s</h%s>' % (self.index,self.html,self.index)

class UnorderedList(object):
    def __init__(self,selector="component-example-standalone",html=""):
        self.selector = selector
        self.html = html

    def __str__(self):
        return '<ul class="%s">%s</ul>' % (self.selector,self.html)

class ListItem(object):
    def __init__(self,html=''):
        self.html = html

    def __str__(self):
        return '<li>%s</li>' % (self.html)

class Anchor(object):
    def __init__(self,href='',html=''):
        self.href = href
        self.html = html

    def __str__(self):
        return '<a href="%s">%s</a>' % (self.href,self.html)

class InputField(object):
    def __init__(self):
        pass

    def __str__(self):
        return '<input placeholder="Fill the field..." />'

class Textarea(object):
    def __init__(self):
        pass

    def __str__(self):
        return '<textarea></textarea>'

class Script(object):
    def __init__(self,src=""):
        self.src = src

    def __str__(self):
        return '<script src="%s"/>' % (self.src)

project_location = os.path.join(os.environ['HOME'],'war/component-example-standalone/')
raw_component = '''
{0}

{1}

{2}

{3}

{4}

{5}

{6}

{7}

{8}

{9}
{10}
'''.format(
    Link().__str__(),
    Header().__str__(),
    Paragraph(html='Modularized architecture').__str__(),
    Hr().__str__(),
    SubHeader().__str__(),
    UnorderedList(html=''.join([
        ListItem(Anchor("#","teste 1").__str__()).__str__(),
        ListItem(Anchor(href="#",html="teste 2").__str__()).__str__(),
        ListItem(Anchor(href="#",html="teste 3").__str__()).__str__(),
    ])).__str__(),
    Hr().__str__(),
    InputField().__str__(),
    Textarea().__str__(),
    Hr().__str__(),
    Script(src="./dist/component-example-standalone.js").__str__(),
    Script(src="./dist/component-example-standalone-app.js").__str__(),
)
file_location = os.path.join(project_location,'component-example-standalone.html')
file_component = open(file_location,'w')

if __name__ == '__main__':
    file_component.write(raw_component)
    file_component.close()
