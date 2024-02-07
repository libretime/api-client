# coding: utf-8

"""
    LibreTime API

    Radio Broadcast & Automation Platform

    The version of the OpenAPI document: 2.0.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest
import datetime

from libretime_client.models.patched_mount_name import PatchedMountName  # noqa: E501

class TestPatchedMountName(unittest.TestCase):
    """PatchedMountName unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> PatchedMountName:
        """Test PatchedMountName
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `PatchedMountName`
        """
        model = PatchedMountName()  # noqa: E501
        if include_optional:
            return PatchedMountName(
                id = 56,
                mount_name = ''
            )
        else:
            return PatchedMountName(
        )
        """

    def testPatchedMountName(self):
        """Test PatchedMountName"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()