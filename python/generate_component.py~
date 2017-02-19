'''Generate component'''

import os

project_location = os.path.join(os.environ['HOME'],'war/component-example-standalone/')
raw_component = '''
<link rel="stylesheet" href="./css/component-example-standalone.css">

<ul class="component-example-standalone">
    <li><a href="#">teste 1</a></li>
    <li><a href="#">teste 2</a></li>
    <li><a href="#">teste 3</a></li>
</ul>

<script src="./dist/component-example-standalone.js"></script>
<script src="./dist/component-example-standalone-app.js"></script>
'''
file_location = os.path.join(project_location,'component-example-standalone.html')
file_component = open(file_location,'w')

if __name__ == '__main__':
    file_component.write(raw_component)
    file_component.close()


