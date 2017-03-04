from setuptools import setup

setup(
   name='foo',
   version='1.0',
   description='Test',
   author='ad5915',
   author_email='ad5915@ic.ac.uk',
   packages=['server'],
   install_requires=['socket', 'threading', 'sys'],
)
