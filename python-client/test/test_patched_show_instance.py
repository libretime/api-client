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

from libretime_client.models.patched_show_instance import PatchedShowInstance  # noqa: E501

class TestPatchedShowInstance(unittest.TestCase):
    """PatchedShowInstance unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> PatchedShowInstance:
        """Test PatchedShowInstance
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `PatchedShowInstance`
        """
        model = PatchedShowInstance()  # noqa: E501
        if include_optional:
            return PatchedShowInstance(
                id = 56,
                created_at = datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'),
                starts_at = datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'),
                ends_at = datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'),
                filled_time = '',
                last_scheduled_at = datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'),
                description = '',
                modified = True,
                rebroadcast = -32768,
                auto_playlist_built = True,
                record_enabled = 0,
                show = 56,
                instance = 56,
                record_file = 56
            )
        else:
            return PatchedShowInstance(
        )
        """

    def testPatchedShowInstance(self):
        """Test PatchedShowInstance"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()